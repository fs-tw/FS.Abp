import { Action, Selector, State, StateContext, createSelector } from '@ngxs/store';
import { Layout } from '../models/layout';
import { Injectable } from '@angular/core';
import { SetNavList, SetShortcuts, SetPageConfig, UpdateProfile, UpdateProcessor } from '../actions/layout.actions'
import { ConfigState, ConfigStateService, Config, LocalizationPipe } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import * as _ from 'lodash';
@State<Layout.State>({
  name: 'NgAlainMsLayoutState',
  defaults: {
    shortcuts: [],
    navList: [],
    pageConfig: { hasAllNav: false, hasSidebar: true },
    profile: {

    },
  } as Layout.State,
})
@Injectable()
export class LayoutState {
  @Selector()
  static getAll(state: Layout.State) {
    return state;
  }
  static getOne(key: string) {
    const selector = createSelector([LayoutState], (state: Layout.State) => {
      return state[key];
    });
    return selector;
  }
  static getDeep(keys: string[] | string) {
    if (typeof keys === 'string') {
      keys = keys.split('.');
    }

    if (!Array.isArray(keys)) {
      throw new Error('The argument must be a dot string or an string array.');
    }

    const selector = createSelector([ConfigState], (state: Config.State) => {
      return (keys as string[]).reduce((acc, val) => {
        if (acc) {
          return acc[val];
        }

        return undefined;
      }, state);
    });

    return selector;
  }

  @Selector()
  static getProfile({ profile }: Layout.State): Layout.Profile {
    return profile;
  }
  @Selector()
  static getProcessor({ processor }: Layout.State): Layout.Processor {
    return processor;
  }

  constructor(
    private localizationPipe: LocalizationPipe,
    private store: Store,
    private configStateService: ConfigStateService
  ) {
  }

  @Action(SetShortcuts)
  setShortcuts({ patchState }: StateContext<Layout.State>, { shortcuts }: SetShortcuts) {
    return patchState({
      shortcuts
    });
  }

  @Action(SetNavList)
  setNavList({ patchState }: StateContext<Layout.State>, { navList }: SetNavList) {
    return patchState({
      navList
    });
  }

  @Action(SetPageConfig)
  setPageConfig({ patchState, getState }: StateContext<Layout.State>, { payload }: SetPageConfig) {
    let oldValue: Layout.PageConfig = getState().pageConfig;
    let pageConfig = { ...oldValue, ...payload };
    return patchState({
      pageConfig
    });
  }

  @Action(UpdateProfile)
  updateProfile({ patchState }: StateContext<Layout.State>, { payload }: UpdateProfile) {

    let profile = payload;
    return patchState({
      profile
    });
  }
  @Action(UpdateProcessor)
  UpdateProcessor({ patchState }: StateContext<Layout.State>, { payload }: UpdateProcessor) {
    let processor = payload;
    return patchState({
      processor
    });
  }



}
