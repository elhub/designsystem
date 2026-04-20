const eds = {
  global: {
    color: {
      elhubBrand: {
        '100': { value: 'rgba(14, 57, 36, 1)' } // #0e3924
      },
      chartSeries: {
        '1': { value: '#3f3f72' },
        '2': { value: '#4f97c8' },
        '3': { value: '#686f38' },
        '4': { value: '#5a776f' },
        '5': { value: '#498f28' },
        '6': { value: '#90a78d' },
        '7': { value: '#dc712f' },
        '8': { value: '#945124' }
      },
      graph: {
        blue: {
          100: { value: 'rgba(40, 56, 149, 1)' }, // #283895
          80: { value: 'rgba(94, 106, 176, 1)' }, // #5E6AB0
          60: { value: 'rgba(147, 155, 201, 1)' }, // #939BC9
          40: { value: 'rgba(189, 191, 220, 1)' } // #BABFDC
        },
        purple: {
          100: { value: 'rgba(127, 84, 187, 1)' }, // #7F54BB
          80: { value: 'rgba(159, 127, 204, 1)' }, // #9F7FCC
          60: { value: 'rgba(190, 169, 220, 1)' }, // #BEA9DC
          40: { value: 'rgba(213, 200, 230, 1)' } // #D5C8E6
        },
        green: {
          100: { value: 'rgba(82, 143, 30, 1)' }, // #00604A
          80: { value: 'rgba(115, 163, 73, 1)' }, // #408877
          60: { value: 'rgba(147, 184, 116, 1)' }, // #7FAFa$
          40: { value: 'rgba(180, 204, 159, 1)' } // #B7D5CD
        },
        darkGreen: {
          100: { value: 'rgba(0, 96, 74, 1)' }, // #00604A
          80: { value: 'rgba(49, 126, 108, 1)' }, // #317E6C
          60: { value: 'rgba(98, 156, 142, 1)' }, // #629C8E
          40: { value: 'rgba(147, 185, 177, 1)' } // #93B9B1
        },
        red: {
          100: { value: 'rgba(211, 47, 47, 1)' }, // #D32F2F
          80: { value: 'rgba(231, 91, 91, 1)' }, // #E75B5B
          60: { value: 'rgba(233, 130, 130, 1)' }, // #E98282
          40: { value: 'rgba(249, 185, 185, 1)' } // #F9B9B9
        },
        grey: {
          100: { value: 'rgba(81, 88, 103, 1)' }, // #515867
          80: { value: 'rgba(134, 139, 149, 1)' } // #868D95
        },
        lightBlue: { value: 'rgba(91, 152, 202, 1)' }, // #5B98CA
        brown: { value: 'rgba(121, 25, 21, 1)' }, // #791915
        orange: { value: 'rgba(222, 109, 2, 1)' }, // #DE6D02
        pink: { value: 'rgba(193, 48, 120, 1)' } // #C13078
      },
      beige: {
        '300': { value: 'rgba(252, 250, 246, 1)' }, // #FCFAF6
        '400': { value: 'rgba(240, 236, 230, 1)' }, // #F0ECE6
        '400-50%': { value: 'rgba(240, 236, 230, 0.5)' } // #F0ECE6 (50% alpha)
      },
      blue: {
        '400': { value: 'rgba(230, 245, 255, 1)' }, // #E6F5FF
        '500': { value: 'rgba(64, 129, 226, 1)' }, // #4081E2
        '550': { value: 'rgba(51, 102, 255, 1)' }, // #3366FF
        '600': { value: 'rgba(16, 74, 162, 1)' } // #104AA2
      },
      brown: {
        '600': { value: 'rgba(119, 71, 13, 1)' } // #77470D
      },
      white: { value: 'rgba(255, 255, 255, 1)' }, // #FFFFFF
      grey: {
        '0': { value: 'rgba(255, 255, 255, 1)' }, // #FFFFFF
        '100': { value: 'rgba(252, 252, 253, 1)' }, // #FCFCFD
        '200': { value: 'rgba(246, 246, 246, 1)' }, // #F6F6F6
        '300': { value: 'rgba(234, 235, 236, 1)' }, // #EAEBEC
        '400': { value: 'rgba(219, 219, 221, 1)' }, // #DBDBDD
        '500': { value: 'rgba(207, 208, 211, 1)' }, // #CFD0D3
        '600': { value: 'rgba(180, 180, 185, 1)' }, // #B4B4B9
        '600-60%': { value: 'rgba(180, 180, 185, 0.6)' }, // #B4B4B9 (60% alpha)
        '700': { value: 'rgba(118, 119, 127, 1)' }, // #76777F
        '800': { value: 'rgba(77, 78, 84, 1)' }, // #4D4E54
        '900': { value: 'rgba(42, 43, 45, 1)' } // #2A2B2D
      },
      green: {
        '150': { value: 'rgba(230, 243, 239, 1)' }, // #E6F3EF
        '200': { value: 'rgba(245, 255, 245, 1)' }, // #F5FFF5
        '300': { value: 'rgba(229, 255, 229, 1)' }, // #E5FFE5
        '350': { value: 'rgba(212, 221, 218, 1)' }, // #D4DDDA
        '400': { value: 'rgba(147, 224, 138, 1)' }, // #93E08A
        '450': { value: 'rgba(25, 143, 93, 1)' }, // #198F5D
        '500': { value: 'rgba(15, 101, 55, 1)' }, // #0F6537
        '550': { value: 'rgba(34, 79, 59, 1)' }, // #224F3B
        '600': { value: 'rgba(9, 68, 32, 1)' }, // #094420
        '700': { value: 'rgba(11, 60, 40, 1)' } // #0B3C28
      },
      orange: {
        '300': { value: 'rgba(255, 232, 204, 1)' }, // #FFE8CC
        '300-60%': { value: 'rgba(255, 232, 204, 0.6)' }, // #FFE8CC (60% alpha)
        '500': { value: 'rgba(255, 191, 112, 1)' }, // #FFBF70
        '600': { value: 'rgba(244, 114, 41, 1)' }, // #F47229
        '700': { value: 'rgba(244, 115, 76, 1)' } // #F4734C
      },
      purple: {
        '200': { value: 'rgba(248, 245, 255, 1)' }, // #F8F5FF
        '300': { value: 'rgba(227, 215, 255, 1)' }, // #E3D7FF
        '400': { value: 'rgba(197, 179, 255, 1)' }, // #C5B3FF
        '500': { value: 'rgba(159, 128, 255, 1)' }, // #9F80FF
        '600': { value: 'rgba(58, 58, 125, 1)' }, // #3A3A7D
        '700': { value: 'rgba(33, 33, 72, 1)' } // #212148
      },
      red: {
        '400': { value: 'rgba(252, 237, 242, 1)' }, // #FCEDF2
        '500': { value: 'rgba(212, 50, 75, 1)' }, // #D4324B
        '500-50%': { value: 'rgba(212, 50, 75, 0.5)' }, // #D4324B (50% alpha)
        '600': { value: 'rgba(127, 29, 53, 1)' } // #7F1D35
      },
      yellow: {
        '400': { value: 'rgba(255, 248, 223, 1)' }, // #FFF8DF
        '500': { value: 'rgba(238, 193, 22, 1)' }, // #EEC116
        '600': { value: 'rgba(218, 165, 32, 1)' } // #DAA520
      }
    }
  }
}

export { eds }
