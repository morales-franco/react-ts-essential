import { Actions } from './Actions';

export interface CounterState {
  counter: number;
  auditInfo: {
    userId: string;
    operation: 'create' | 'modify';
  }[];
}

export const CounterReducer = (state: CounterState, action: Actions) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + action.payload.value,
      };

    case 'decrement':
      return {
        ...state,
        counter: state.counter - action.payload.value,
      };
    case 'add_user':
      return {
        ...state,
        auditInfo: [...state.auditInfo, action.payload],
      };
    case 'update_user':
      return {
        ...state,
        auditInfo: state.auditInfo.map((a) => {
          if (a.userId === action.payload.userId) {
            return {
              ...a,
              operation: action.payload.operation,
            };
          }

          return a;
        }),
      };
    case 'remove_user':
      return {
        ...state,
        auditInfo: state.auditInfo.filter(
          (a) => a.userId !== action.payload.userId
        ),
      };

    default:
      return state;
  }
};
