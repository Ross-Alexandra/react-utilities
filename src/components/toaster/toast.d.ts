type ToastLevel = 'error' | 'alert' | 'warning' | 'info'

interface Toast {
    title: string;
    message: string;
    level: ToastLevel
}

interface RegisterComponent {
    type: 'register-component';
    component: React.ReactNode;
}

type ToasterActions = RegisterComponent

interface ToasterState {
    component: React.ReactNode | null;
    toast: Toast[]
}
