import 'posthog-js/dist/recorder'
import 'posthog-js/dist/surveys'
import 'posthog-js/dist/exception-autocapture'
import 'posthog-js/dist/web-vitals'
import posthog from 'posthog-js/dist/module.no-external'

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: '/ingest',
  ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  defaults: '2025-05-24',
  capture_pageview: false,
  capture_pageleave: true,
  autocapture: true,
})

export function onRouterTransitionStart(url: string, navigationType: 'push' | 'replace' | 'traverse') {
  posthog.capture('$pageview', { url, navigationType })
}
