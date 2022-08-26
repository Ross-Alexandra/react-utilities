export const initialValue = {
    component: null,
    toast: [] as Toast[]
}

export function toasterReducer(state: ToasterState, action: ToasterActions) {
    switch(action.type) {
        case 'register-component': {
            return {
                ...state,
                component: action.component
            };
        }
        default: {
            return state;
        }
    }
}
