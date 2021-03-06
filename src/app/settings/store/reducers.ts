import {Action, createReducer, on} from '@ngrx/store';
import {SettingsStateInterface} from '../types/settingState.interface';
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from '../../auth/store/actions/updateCurrentUser.action';

const initialState: SettingsStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const settingReducer = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateCurrentUserFailureAction,
    (state, action): SettingsStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: SettingsStateInterface, action: Action) {
  return settingReducer(state, action);
}
