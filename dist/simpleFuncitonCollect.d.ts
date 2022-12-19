declare global {
    interface Window {
        [key: string]: any;
    }
}
declare const asyncSetTime: (funName: Function, time: number) => void;
declare const validateIsNumber: (number: number | string) => Boolean;
declare const validateIsEmail: (number: number | string) => Boolean;
declare const validateIsPhone: (number: number | string) => Boolean;
declare const getQueryString: (param: string) => string | number | null;
declare const objectSaveOnly: (ary: Array<any>, keyWord: string) => null | Array<any>;
declare const SimpleArraySaveOnly: (arr: Array<any>) => Array<any>;
declare const AntiShakeFun: () => any;
declare const getMonthLength: (Year: string, Month: string) => number;
declare const getDistanceDays: (date1: any) => string | number;
declare const checkIsNum: (value: string | number) => Boolean;
export { asyncSetTime, validateIsNumber, validateIsEmail, validateIsPhone, objectSaveOnly, SimpleArraySaveOnly, getQueryString, getMonthLength, getDistanceDays, checkIsNum, AntiShakeFun };
