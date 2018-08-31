import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  searchHeroes(search: string) {
    element(by.tagName('input')).sendKeys(search)
  }

  getSearchResults() {
    return element.all(by.className('search-result')).count();
  }

  deleteHero() {
    element(by.buttonText('x')).click();
  }

  navigateToHeroDetailsSearch() {
    element(by.className('search-result')).click();
  }

  navigateToHeroDetailsDashboard() {
    element(by.tagName('h4')).click();
  }

  navigateToHeroDetailsList() {
    element(by.className('badge')).click();
    element(by.buttonText('View Details')).click();
  }

  editHero(newName: string) {
    element(by.tagName('input')).sendKeys(newName);
    element(by.buttonText('Save')).click();
  }

  checkEdit() {
    return element(by.tagName('h3')).getText();
  }

  checkDetails() {
    return element(by.tagName('h2')).getText();
  }
}
