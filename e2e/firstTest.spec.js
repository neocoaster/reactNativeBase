describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Should see Home Screen text', async () => {
    await expect(element(by.text('Home Screen'))).toExist();
  });
});
