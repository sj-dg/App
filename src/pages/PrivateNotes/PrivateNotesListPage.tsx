import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useMemo} from 'react';
import {ScrollView} from 'react-native';
import {withOnyx} from 'react-native-onyx';
import type {OnyxCollection, OnyxEntry} from 'react-native-onyx';
import type {ValueOf} from 'type-fest';
import HeaderWithBackButton from '@components/HeaderWithBackButton';
import MenuItemWithTopDescription from '@components/MenuItemWithTopDescription';
import ScreenWrapper from '@components/ScreenWrapper';
import Text from '@components/Text';
import useLocalize from '@hooks/useLocalize';
import useThemeStyles from '@hooks/useThemeStyles';
import Navigation from '@libs/Navigation/Navigation';
import withReportAndPrivateNotesOrNotFound from '@pages/home/report/withReportAndPrivateNotesOrNotFound';
import CONST from '@src/CONST';
import ONYXKEYS from '@src/ONYXKEYS';
import ROUTES from '@src/ROUTES';
import type {PersonalDetails, Report, Session} from '@src/types/onyx';

type PrivateNotesListPageOnyxProps = {
    /* Onyx Props */

    /** All of the personal details for everyone */
    personalDetailsList: OnyxCollection<PersonalDetails>;

    /** Session info for the currently logged in user. */
    session: OnyxEntry<Session>;
};

type PrivateNotesListPageProps = PrivateNotesListPageOnyxProps & {
    /** The report currently being looked at */
    report: Report;
};

type NoteListItem = {
    title: string;
    action: () => void;
    brickRoadIndicator: ValueOf<typeof CONST.BRICK_ROAD_INDICATOR_STATUS> | undefined;
    note: string;
    disabled: boolean;
};

function PrivateNotesListPage({report, personalDetailsList, session}: PrivateNotesListPageProps) {
    const styles = useThemeStyles();
    const {translate} = useLocalize();
    const isFocused = useIsFocused();

    useEffect(() => {
        const navigateToEditPageTimeout = setTimeout(() => {
            if (Object.values(report.privateNotes ?? {}).some((item) => item.note) || !isFocused) {
                return;
            }
            Navigation.navigate(ROUTES.PRIVATE_NOTES_EDIT.getRoute(report.reportID, session?.accountID ?? ''));
        }, CONST.ANIMATED_TRANSITION);

        return () => {
            clearTimeout(navigateToEditPageTimeout);
        };
    }, [report.privateNotes, report.reportID, session?.accountID, isFocused]);

    /**
     * Gets the menu item for each workspace
     */
    function getMenuItem(item: NoteListItem) {
        return (
            <MenuItemWithTopDescription
                description={item.title}
                title={item.note}
                onPress={item.action}
                shouldShowRightIcon={!item.disabled}
                numberOfLinesTitle={0}
                shouldRenderAsHTML
                brickRoadIndicator={item.brickRoadIndicator}
                disabled={item.disabled}
                shouldGreyOutWhenDisabled={false}
            />
        );
    }

    /**
     * Returns a list of private notes on the given chat report
     */
    const privateNotes = useMemo(() => {
        const privateNoteBrickRoadIndicator = (accountID: number) => (report.privateNotes?.[accountID].errors ? CONST.BRICK_ROAD_INDICATOR_STATUS.ERROR : undefined);
        return Object.keys(report.privateNotes ?? {}).map((accountID: string) => {
            const privateNote = report.privateNotes?.[Number(accountID)];
            return {
                title: Number(session?.accountID) === Number(accountID) ? translate('privateNotes.myNote') : personalDetailsList?.[accountID]?.login ?? '',
                action: () => Navigation.navigate(ROUTES.PRIVATE_NOTES_EDIT.getRoute(report.reportID, accountID)),
                brickRoadIndicator: privateNoteBrickRoadIndicator(Number(accountID)),
                note: privateNote?.note ?? '',
                disabled: Number(session?.accountID) !== Number(accountID),
            };
        });
    }, [report, personalDetailsList, session, translate]);

    return (
        <ScreenWrapper
            includeSafeAreaPaddingBottom={false}
            testID={PrivateNotesListPage.displayName}
        >
            <HeaderWithBackButton
                title={translate('privateNotes.title')}
                shouldShowBackButton
                onCloseButtonPress={() => Navigation.dismissModal()}
            />
            <Text style={[styles.mb5, styles.ph5]}>{translate('privateNotes.personalNoteMessage')}</Text>
            <ScrollView contentContainerStyle={styles.flexGrow1}>{privateNotes.map((item) => getMenuItem(item))}</ScrollView>
        </ScreenWrapper>
    );
}

PrivateNotesListPage.displayName = 'PrivateNotesListPage';

export default withReportAndPrivateNotesOrNotFound('privateNotes.title')(
    withOnyx<PrivateNotesListPageProps, PrivateNotesListPageOnyxProps>({
        personalDetailsList: {
            key: ONYXKEYS.PERSONAL_DETAILS_LIST,
        },
        session: {
            key: ONYXKEYS.SESSION,
        },
    })(PrivateNotesListPage),
);
