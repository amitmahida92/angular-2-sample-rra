/**
 * Created by Amit.Mahida on 03-02-2016.
 */

import {Injectable} from 'angular2/core';

@Injectable()
export class CommonService {

    serializeObj(obj) {
        let result = [];
        for (let property in obj) result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    }
}