import { ApplicationConfigurationService, ConfigStateService } from '@abp/ng.core';
import { HttpClient, HttpHeaders, HttpParameterCodec, HttpParams } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import {
  OAuthService, OAuthStorage,
  TokenResponse
} from 'angular-oauth2-oidc';
import { from, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import snq from 'snq';
@Injectable()
export class AuthService {
  constructor(
    private oAuthService: OAuthService,
    private http: HttpClient,
    private _storage: OAuthStorage,
    private configStateService: ConfigStateService,
    private applicationConfigurationService: ApplicationConfigurationService,
    private router: Router,
    @Optional() @Inject('ACCOUNT_OPTIONS') private options: any
  ) {
  };
  
  login(user_name: string, password: string): Observable<any> {
    return from(this.oAuthService.loadDiscoveryDocument()).pipe(
      switchMap((x) => {

        let params = new HttpParams({ encoder: new WebHttpUrlEncodingCodec() })
          .set('grant_type', 'password')
          // .set('provider_key', "Tgk")
          .set('scope', this.oAuthService.scope)
          .set('client_id', this.oAuthService.clientId)
          .set('client_secret', this.oAuthService.dummyClientSecret)
          .set('username', user_name)
          .set('password', password);

        return this.fetchTokenUsingGrant(this.oAuthService.tokenEndpoint, params);
      }),
      switchMap(() => {
        return this.applicationConfigurationService.getConfiguration()
          .pipe(tap(x => this.configStateService.setState(x)))
      }),
      tap((x) => {              
        const redirectUrl =
          snq(() => window.history.state.redirectUrl) || (this.options || {}).redirectUrl || '/';
        this.router.navigateByUrl(redirectUrl);
      })
    );
  }


  private fetchTokenUsingGrant(tokenEndpoint: string, params: HttpParams) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    return this.http
      .post<TokenResponse>(tokenEndpoint, params, { headers })
      .pipe(
        tap(tokenResponse => {
          this.storeAccessTokenResponse(
            tokenResponse.access_token,
            tokenResponse.refresh_token,
            tokenResponse.expires_in || this.oAuthService.fallbackAccessTokenExpirationTimeInSec,
            tokenResponse.scope,
            this.extractRecognizedCustomParameters(tokenResponse)
          )
        })
      );
  }


  protected storeAccessTokenResponse(
    accessToken: string,
    refreshToken: string,
    expiresIn: number,
    grantedScopes: String,
    customParameters?: Map<string, string>
  ): void {
    this._storage.setItem('access_token', accessToken);
    if (grantedScopes && !Array.isArray(grantedScopes)) {
      this._storage.setItem(
        'granted_scopes',
        JSON.stringify(grantedScopes.split('+'))
      );
    } else if (grantedScopes && Array.isArray(grantedScopes)) {
      this._storage.setItem('granted_scopes', JSON.stringify(grantedScopes));
    }

    this._storage.setItem('access_token_stored_at', '' + Date.now());
    if (expiresIn) {
      const expiresInMilliSeconds = expiresIn * 1000;
      const now = new Date();
      const expiresAt = now.getTime() + expiresInMilliSeconds;
      this._storage.setItem('expires_at', '' + expiresAt);
    }

    if (refreshToken) {
      this._storage.setItem('refresh_token', refreshToken);
    }
    if (customParameters) {
      customParameters.forEach((value: string, key: string) => {
        this._storage.setItem(key, value);
      });
    }
  }


  private extractRecognizedCustomParameters(
    tokenResponse: TokenResponse
  ): Map<string, string> {
    let foundParameters: Map<string, string> = new Map<string, string>();
    if (!this.oAuthService.customTokenParameters) {
      return foundParameters;
    }
    this.oAuthService.customTokenParameters.forEach((recognizedParameter: string) => {
      if (tokenResponse[recognizedParameter]) {
        foundParameters.set(
          recognizedParameter,
          JSON.stringify(tokenResponse[recognizedParameter])
        );
      }
    });
    return foundParameters;
  }
}


export class WebHttpUrlEncodingCodec implements HttpParameterCodec {
  encodeKey(k: string): string {
    return encodeURIComponent(k);
  }

  encodeValue(v: string): string {
    return encodeURIComponent(v);
  }

  decodeKey(k: string): string {
    return decodeURIComponent(k);
  }

  decodeValue(v: string) {
    return decodeURIComponent(v);
  }
}