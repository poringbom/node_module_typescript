
export class BookStoreService {

    private data =  [
        {id: 1, title: 'harry potter 1'},
        {id: 2, title: 'harry potter 2'},
        {id: 3, title: 'harry potter 3'},
        {id: 4, title: 'harry potter 4'},
        {id: 5, title: 'harry potter 5'},
        {id: 6, title: 'harry potter 5'},
        {id: 7, title: 'harry potter 6'},
    ]

    public list() : Object[]{
        return this.data
    }

    public get(id: number) : Object {
        return this.data.filter(d => d.id == id)
    }
}