function createSVGElement(type) {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    element.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    element.setAttribute('viewBox', '0 0 512 512');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    if (type === 'info') {
        path.setAttribute('d', 'M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z');
        path.setAttribute('fill', '#19417c');
    }
    else if (type === 'warn') {
        path.setAttribute('d', 'M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z');
        path.setAttribute('fill', '#cdc07c');
    }
    else if (type === 'success') {
        path.setAttribute('d', 'M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z');
        path.setAttribute('fill', '#2bb77c');
    }
    else if (type === 'error') {
        path.setAttribute('d', 'M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z');
        path.setAttribute('fill', '#e94d4d');
    }
    element.appendChild(path);
    return element;
}
const defaultOption = {
    icon: 'info',
    message: '',
    duration: 50000,
};
class Toast {
    constructor(option) {
        this.useOption = Object.assign(Object.assign({}, defaultOption), option);
        this.icon = this.useOption.icon;
        this.message = this.useOption.message;
        this.duration = this.useOption.duration;
        this.element = null;
        this.box = null;
        this.boxCreateInitialize();
        this.createToast();
        setTimeout(() => {
            this.removeToast();
        }, this.duration);
    }
    boxCreateInitialize() {
        this.box = document.getElementById('ns-toast-box');
        if (this.box === null) {
            const create_box = document.createElement('div');
            create_box.id = 'ns-toast-box';
            this.box = create_box;
            document.body.appendChild(this.box);
        }
    }
    createToast() {
        var _a;
        console.log('create-toast');
        const toast_div = document.createElement('div');
        toast_div.style.transform = 'translateX(150%)';
        toast_div.style.transition = '0.3s';
        toast_div.classList.add('ns-toast');
        const icon_div = document.createElement('div');
        icon_div.classList.add('ns-toast-icon-div');
        const svg = createSVGElement(this.icon);
        icon_div.appendChild(svg);
        const message_div = document.createElement('div');
        message_div.classList.add('ns-toast-msg-div');
        const span = document.createElement('span');
        span.innerText = this.message;
        message_div.appendChild(span);
        toast_div.appendChild(message_div);
        toast_div.appendChild(icon_div);
        (_a = this.box) === null || _a === void 0 ? void 0 : _a.appendChild(toast_div);
        this.element = toast_div;
        setTimeout(() => {
            toast_div.style.transform = 'translateX(0)';
        }, 100);
    }
    removeToast() {
        this.element.style.transform = 'translateX(150%)';
        console.log('remove-toast');
        setTimeout(() => {
            var _a, _b;
            (_a = this.box) === null || _a === void 0 ? void 0 : _a.removeChild(this.element);
            const toasts = (_b = this.box) === null || _b === void 0 ? void 0 : _b.getElementsByTagName('div');
            if ((toasts === null || toasts === void 0 ? void 0 : toasts.length) === 0) {
                document.body.removeChild(this.box);
            }
        }, 1000);
    }
}
export { Toast };
//# sourceMappingURL=index.js.map