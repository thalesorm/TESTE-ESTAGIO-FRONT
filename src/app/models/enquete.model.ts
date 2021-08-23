export class Enquete {
    id?: number;
    title?: string;
    dateStart?: Date;
    dateEnd?: Date;
    status?: string;
    options?: Option[];

}

export class Option{
    id?: number;
    title?: string;
    enqueteId?: number;
    votes?: Vote[];
    countVote?: number;
}


export class Vote{
    id?: number;
    optionId?: number;
}
