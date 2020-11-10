import {MatPaginatorIntl} from "@angular/material/paginator";
import {Injectable} from "@angular/core";

@Injectable()
export class MatPaginatorIntlEsp extends MatPaginatorIntl {
    itemsPerPageLabel = 'Elementos por página';
    nextPageLabel     = 'Página siguiente';
    previousPageLabel = 'Página anterior';
    firstPageLabel = 'Primera página'
    lastPageLabel = 'Última página'

    getRangeLabel =  (page: number, pageSize: number, length: number): string => {
        if (length === 0 || pageSize === 0) {
            return `0 de ${length}`;
        }
        length = Math.max(length, 0);
        const START_INDEX: number = page * pageSize;
        const END_INDEX: number = START_INDEX < length ?
            Math.min(START_INDEX + pageSize, length) :
            START_INDEX + pageSize;
        return `${START_INDEX + 1} - ${END_INDEX} de ${length}`;
    };

}
