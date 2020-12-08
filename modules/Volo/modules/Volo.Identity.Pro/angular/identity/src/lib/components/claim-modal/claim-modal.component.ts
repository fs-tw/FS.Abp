import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, take } from 'rxjs/operators';
import { IdentityRoleService } from '../../proxy/identity/identity-role.service';
import { IdentityUserService } from '../../proxy/identity/identity-user.service';
import { IdentityRoleClaimDto, IdentityUserClaimDto } from '../../proxy/identity/models';

type Claim = IdentityUserClaimDto | IdentityRoleClaimDto;

@Component({
  selector: 'abp-claim-modal',
  templateUrl: './claim-modal.component.html',
})
export class ClaimModalComponent implements OnChanges, OnInit {
  // tslint:disable-next-line: variable-name
  protected _visible;

  @Input()
  subject: { id: string; type: 'roles' | 'users' };

  @Input()
  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    if (this._visible === value) return;

    this._visible = value;
    this.visibleChange.emit(value);
  }

  @Output()
  visibleChange = new EventEmitter<boolean>();

  modalBusy: boolean = false;

  claimTypes: { name: string }[];

  subjectClaims: Claim[];

  newClaimType: string;

  newClaimValue: string;

  service: IdentityRoleService | IdentityUserService;

  constructor(
    private roleService: IdentityRoleService,
    private userService: IdentityUserService,
    private store: Store,
  ) {}

  ngOnChanges({ visible, subject }: SimpleChanges) {
    if (subject && subject.currentValue) {
      this.service = subject.currentValue.type === 'roles' ? this.roleService : this.userService;
    }

    if (!visible) return;

    if (visible.currentValue) this.initModal();
    else {
      this.newClaimType = null;
      this.newClaimValue = null;
      this.subjectClaims = null;
    }
  }

  ngOnInit() {}

  initModal() {
    this.getClaimTypeNames();
    this.getSubjectClaims(this.subject);
  }

  private getClaimTypeNames() {
    this.service.getAllClaimTypes().subscribe(claimTypes => (this.claimTypes = claimTypes));
  }

  private getSubjectClaims(subject: { id: string; type: 'roles' | 'users' }) {
    (this.service.getClaims(subject.id) as Observable<Claim[]>)
      .pipe(take(1))
      .subscribe(claims => (this.subjectClaims = claims));
  }

  addClaim() {
    if (!this.newClaimType || !this.newClaimValue) return;

    let claim = {
      claimType: this.newClaimType,
      claimValue: this.newClaimValue,
    } as IdentityRoleClaimDto;

    const key = this.subject.type === 'roles' ? 'roleId' : 'userId';
    claim = { [key]: this.subject.id, ...claim };

    this.subjectClaims.push(claim);
    this.newClaimType = '';
    this.newClaimValue = '';
  }

  removeClaim(index) {
    if (!this.subjectClaims[index]) return;

    this.subjectClaims = this.subjectClaims.filter((_, i) => i !== index);
  }

  save() {
    if (this.modalBusy) return;

    this.modalBusy = true;

    this.service
      .updateClaims(this.subject.id, this.subjectClaims as any)
      .pipe(
        take(1),
        finalize(() => (this.modalBusy = false)),
      )
      .subscribe(() => (this.visible = false));
  }
}
