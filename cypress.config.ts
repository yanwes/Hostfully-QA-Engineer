import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  )

  return config
}

export default defineConfig({
  e2e: {
    baseUrl: 'https://computer-database.gatling.io',
    specPattern: '**/*.feature',
    setupNodeEvents,
  },
  video: true,
  videosFolder: "cypress/report/evidences/videos",
  screenshotOnRunFailure: true,
  screenshotsFolder: "cypress/report/evidences/screenshots",
  trashAssetsBeforeRuns: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/report/mochareports',
    overwrite: false,
    html: false,
    json: true,
  }
})
