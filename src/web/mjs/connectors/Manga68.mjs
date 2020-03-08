import WordPressMadara from './templates/WordPressMadara.mjs';

export default class Manga68 extends WordPressMadara {

    constructor() {
        super();
        super.id = 'manga68';
        super.label = 'Manga68';
        this.tags = [ 'webtoon', 'english' ];
        this.url = 'https://manga68.com';
    }

    /*
    async _initializeConnector() {
        // URL won't load if random parameters were added
        let request = new Request(new URL(this.url), this.requestOptions);
        return Engine.Request.fetchUI(request, '');
    }
    */
}