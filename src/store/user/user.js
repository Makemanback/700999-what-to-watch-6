import {createReducer} from '@reduxjs/toolkit';

import {requireAuthorization} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

// const user = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionType.REQUIRED_AUTHORIZATION:
//       return {
//         ...state,
//         authorizationStatus: action.payload,
//       };
//   }

//   return state;
// };

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    return {
      ...state,
      authorizationStatus: action.payload,
    };
  });
});

export {user};
