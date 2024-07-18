import { test, expect } from '@playwright/test'
import { worker } from '../src/msw/browser'

test.beforeAll(async () => {
  await worker.start()
})

test.afterAll(async () => {
  await worker.stop()
})

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:5173')
  
  // Test that the page loads correctly
  await expect(page.getByText('Vite + React')).toBeVisible()
  
  // Test the counter functionality
  const countButton = page.getByText('count is 0')
  await countButton.click()
  await expect(page.getByText('count is 1')).toBeVisible()
  
  // You can add more tests here, including ones that use your MSW mocks
})