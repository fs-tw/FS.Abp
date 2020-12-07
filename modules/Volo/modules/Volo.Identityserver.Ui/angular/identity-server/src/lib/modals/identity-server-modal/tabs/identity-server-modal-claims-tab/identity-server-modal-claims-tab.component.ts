import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { take } from 'rxjs/operators';
import { IdentityClaimTypeDto } from '../../../../proxy/claim-type/dtos/models';
import { IdentityServerClaimTypesService } from '../../../../proxy/identity-server-claim-types.service';
import { IdentityServerModalTabComponent } from '../identity-server-modal-tab.component';

export type IdentityServerClaimModel = Partial<IdentityClaimTypeDto> & { left: boolean };

@Component({
  selector: 'abp-identity-server-modal-claims-tab',
  templateUrl: './identity-server-modal-claims-tab.component.html',
  providers: [
    {
      provide: IdentityServerModalTabComponent,
      useExisting: IdentityServerModalClaimsTabComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityServerModalClaimsTabComponent
  extends IdentityServerModalTabComponent
  implements OnInit {
  title = 'Claims';

  // tslint:disable-next-line: variable-name
  _claims: IdentityServerClaimModel[] = [];
  @Input() set claims(val: IdentityServerClaimModel[]) {
    this._claims = val || [];
    this.mergeClaims();
  }

  get claims() {
    return this._claims;
  }
  definedClaims: IdentityServerClaimModel[] = [];

  constructor(private service: IdentityServerClaimTypesService) {
    super();
  }

  ngOnInit(): void {
    this.service
      .getList()
      .pipe(take(1))
      .subscribe(claims => {
        this.definedClaims = claims.map(c => ({ ...c, left: false }));
        this.definedClaims = this.mergeClaims();
      });
  }

  getValue() {
    return {
      userClaims: this.definedClaims
        .filter(claim => claim.left)
        .map(claim => ({
          type: claim.name,
        })),
    };
  }

  private mergeClaims() {
    const rightList = this.definedClaims.filter(this.givenClaimsNotContains);
    return [...rightList, ...this.claims];
  }

  private givenClaimsNotContains = (claim: IdentityServerClaimModel) => {
    return this.claims.findIndex(c => c.name === claim.name) < 0;
  };
}
