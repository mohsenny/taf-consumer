import { Page, Locator } from 'playwright';
import { BasePage } from 'test-automation-framework';
import { expect } from '@playwright/test';

export class ResultsPage extends BasePage {
    duckBarSelector: string;
    
    constructor(page: Page) {
        super(page, 'http://www.duckduckgo.com');
        this.duckBarSelector = '#duckbar_static';
        // this.duckBarSelector = '.anomaly-modal__mask';
    }
    
    getDuckBar(): Locator {
        return this.page.locator(this.duckBarSelector);
    }
}

