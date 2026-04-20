import Highcharts from 'highcharts/esm/highcharts.src.js'
import { Chart as HighchartsReactChart } from '@highcharts/react'
import React, { forwardRef } from 'react'
import merge from 'deepmerge'
import type { HighchartsReactRefObject, ICommonAttributes as HighchartsReactProps } from '@highcharts/react'

import 'highcharts/esm/modules/accessibility.src.js'
import 'highcharts/esm/modules/exporting.src.js'
import 'highcharts/esm/modules/export-data.src.js'
import 'highcharts/esm/modules/pattern-fill.src.js'
import 'highcharts/esm/modules/drilldown.src.js'
import 'highcharts/esm/modules/no-data-to-display.src.js'

import {
  EdsGlobalColorChartSeries1,
  EdsGlobalColorChartSeries2,
  EdsGlobalColorChartSeries3,
  EdsGlobalColorChartSeries4,
  EdsGlobalColorChartSeries5,
  EdsGlobalColorChartSeries6,
  EdsGlobalColorChartSeries7,
  EdsGlobalColorChartSeries8
} from '@elhub/ds-tokens/dist/tokens'

export const colorSeries = [
  EdsGlobalColorChartSeries1,
  EdsGlobalColorChartSeries2,
  EdsGlobalColorChartSeries3,
  EdsGlobalColorChartSeries4,
  EdsGlobalColorChartSeries5,
  EdsGlobalColorChartSeries6,
  EdsGlobalColorChartSeries7,
  EdsGlobalColorChartSeries8
]

const navButtonSize = 44
const navButtonSymbolPosition = navButtonSize / 2

const textStyle = {
  fontSize: '0.75rem',
  color: 'var(--eds-semantic-text)'
}

const options: Highcharts.Options = {
  accessibility: {
    keyboardNavigation: {
      focusBorder: {
        style: {
          color: 'black'
        }
      }
    }
  },
  colors: colorSeries,
  credits: {
    enabled: false // Hides the credits label in the lower left corner
  },
  drilldown: {
    activeAxisLabelStyle: {
      ...textStyle,
      fontWeight: 'normal',
      textDecoration: 'none'
    }
  },
  exporting: {
    enabled: false
  },
  legend: {
    enabled: false
  },
  navigation: {
    buttonOptions: {
      y: navButtonSymbolPosition * -0.7,
      theme: {
        fill: 'transparent'
      }
    }
  },
  plotOptions: {
    column: {
      centerInCategory: true
    }
  },
  title: {
    text: undefined
  },
  xAxis: {
    lineWidth: 1,
    title: {
      style: textStyle
    },
    labels: {
      style: textStyle
    }
  },
  yAxis: {
    lineWidth: 1,
    title: {
      style: textStyle
    },
    labels: {
      style: textStyle
    }
  }
}

const Chart = forwardRef((props: HighchartsReactProps, ref: React.Ref<HighchartsReactRefObject>) => {
  return (
    <HighchartsReactChart
      highcharts={Highcharts}
      ref={ref}
      {...props}
      options={merge(options, props.options || {})}
    />
  )
})

Chart.displayName = 'Chart'
export default Chart
