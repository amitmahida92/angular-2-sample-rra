/**
 * Created by Amit.Mahida on 03-02-2016.
 */

import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

    serializeObj(obj) {
        let result = [];
        for (let property in obj) {
            if (property)
                result.push(encodeURIComponent(property) + '=' + encodeURIComponent(obj[property]));
        }
        return result.join('&');
    }
}