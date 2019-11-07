describe('Camera flow', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Should go to Camera screen', async () => {
    await device.reloadReactNative();
    await expect(element(by.id('Camera'))).toExist();
    await expect(element(by.id('Details'))).toExist();
    await element(by.id('Camera')).tap();
    await expect(element(by.label('Take picture'))).toExist();
  });
});
