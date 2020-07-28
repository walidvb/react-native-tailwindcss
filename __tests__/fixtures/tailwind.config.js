import { PlatformColor, DynamicColorIOS } from 'react-native';

module.exports = {
    theme: {
        extend: {
            colors: {
                cyan: '#9cdbff',
                platform: PlatformColor('test'),
                darkmode: DynamicColorIOS({ dark: 'blue', light: 'green' }),
                'transparent-white': {
                    100: 'rgba(255, 255, 255, 0.1)',
                    200: 'rgba(255, 255, 255, 0.2)',
                    300: 'rgba(255, 255, 255, 0.3)',
                    400: 'rgba(255, 255, 255, 0.4)',
                    500: 'rgba(255, 255, 255, 0.5)',
                    600: 'rgba(255, 255, 255, 0.6)',
                    700: 'rgba(255, 255, 255, 0.7)',
                    800: 'rgba(255, 255, 255, 0.8)',
                    900: 'rgba(255, 255, 255, 0.9)',
                },
            },
            margin: {
                '96': '24rem',
                '128': '32rem',
            },
            zIndex: {
                '-10': -10,
            },
            inset: {
                '-20': '-20px',
            },
        },
        fontFamily: {
            display: 'Gilroy',
            body: 'Graphik',
        },
        flex: {
            '-3': -3,
            '-2': -2,
            '-1': -1,
            '0': 0,
            '1': 1,
            '2': 2,
            '3': 3,
        },
    },
};
