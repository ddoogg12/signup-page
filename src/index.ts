/* 앱의 시작점*/
import { AnyObject } from './types';
import App from './app'; //App.ts

declare global {
    interface Window {
        Handlebars: {
            compile: (template:string) => (data: AnyObject) => string;
        },
        daum: any,
    }
}

//App Instance 생성
const app = new App('#root', {
    title: '회원가입 Form 만들기'
});

app.render();