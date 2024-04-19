import type {ParamListBase, StackActionHelpers} from '@react-navigation/native';
import {createNavigatorFactory, useNavigationBuilder} from '@react-navigation/native';
import type {StackNavigationEventMap, StackNavigationOptions} from '@react-navigation/stack';
import {StackView} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import useWindowDimensions from '@hooks/useWindowDimensions';
import navigationRef from '@libs/Navigation/navigationRef';
import withWebNavigationOptions from '@libs/Navigation/PlatformStackNavigation/platformOptions/withWebNavigationOptions';
import type {
    PlatformStackNavigationEventMap,
    PlatformStackNavigationOptions,
    PlatformStackNavigationState,
    PlatformStackScreenOptionsWithoutNavigation,
} from '@libs/Navigation/PlatformStackNavigation/types';
import CustomFullScreenRouter from './CustomFullScreenRouter';
import type {FullScreenNavigatorProps, FullScreenNavigatorRouterOptions} from './types';

function createCustomFullScreenNavigator<TStackParams extends ParamListBase>() {
    function CustomFullScreenNavigator(props: FullScreenNavigatorProps<ParamListBase>) {
        const webScreenOptions = withWebNavigationOptions(props.screenOptions);

        const {navigation, state, descriptors, NavigationContent} = useNavigationBuilder<
            PlatformStackNavigationState<ParamListBase>,
            FullScreenNavigatorRouterOptions,
            StackActionHelpers<ParamListBase>,
            StackNavigationOptions,
            StackNavigationEventMap
        >(CustomFullScreenRouter, {
            children: props.children,
            screenOptions: webScreenOptions,
            initialRouteName: props.initialRouteName,
        });

        const {isSmallScreenWidth} = useWindowDimensions();

        useEffect(() => {
            if (!navigationRef.isReady()) {
                return;
            }
            // We need to separately reset state of this navigator to trigger getRehydratedState.
            navigation.reset(navigation.getState());
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [isSmallScreenWidth]);

        return (
            <NavigationContent>
                <StackView
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...props}
                    state={state}
                    descriptors={descriptors}
                    navigation={navigation}
                />
            </NavigationContent>
        );
    }
    CustomFullScreenNavigator.displayName = 'CustomFullScreenNavigator';

    const transformScreenProps = <RouteName extends keyof TStackParams>(screenOptions: PlatformStackScreenOptionsWithoutNavigation<TStackParams, RouteName>) =>
        withWebNavigationOptions<TStackParams, RouteName>(screenOptions);

    return createNavigatorFactory<
        PlatformStackNavigationState<TStackParams>,
        PlatformStackNavigationOptions,
        PlatformStackNavigationEventMap,
        typeof CustomFullScreenNavigator,
        StackNavigationOptions
    >(CustomFullScreenNavigator)<TStackParams>(transformScreenProps);
}

export default createCustomFullScreenNavigator;
