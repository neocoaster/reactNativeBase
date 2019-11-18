describe('Details flow', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Should go to Details screen and back', async () => {
    await expect(element(by.id('Camera'))).toExist();
    await expect(element(by.id('Animations'))).toExist();
    await element(by.id('Animations')).tap();
    await expect(element(by.id('AnimationText'))).toExist();
  });
});
