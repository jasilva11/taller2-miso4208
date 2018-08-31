import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });

  it('should search heroes', () => {
    page.navigateTo();
    page.searchHeroes('M');
    expect(page.getSearchResults()).toBe(6);
  });

  it('should navigate to details by search', () => {
    page.navigateTo();
    page.searchHeroes('Mr. Nice');
    page.navigateToHeroDetailsSearch();
    expect(page.checkDetails()).toContain('details!');
  });

  it('should navigate to details by dashboard', () => {
    page.navigateTo();
    page.navigateToHeroDetailsDashboard();
    expect(page.checkDetails()).toContain('details!');
  });

  it('should edit a hero', () => {
    page.navigateTo();
    page.navigateToHeroDetailsDashboard();
    page.editHero('Test');
    expect(page.checkEdit()).toEqual('Top Heroes');
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

  it('should delete a hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.deleteHero();
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });

  it('should navigate to details by the list of heroes', () => {
    page.navigateToHeroDetailsList();
    expect(page.checkDetails()).toContain('details!');
  });
});
