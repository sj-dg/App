import React from 'react';
import {View, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Str from 'expensify-common/lib/str';
import lodashGet from 'lodash/get';
import Text from '../Text';
import Icon from '../Icon';
import * as Expensicons from '../Icon/Expensicons';
import * as IOUUtils from '../../libs/IOUUtils';
import styles from '../../styles/styles';
import themeColors from '../../styles/themes/default';
import reportActionPropTypes from '../../pages/home/report/reportActionPropTypes';
import withLocalize, {withLocalizePropTypes} from '../withLocalize';

const propTypes = {
    /** All the data of the action */
    action: PropTypes.shape(reportActionPropTypes).isRequired,

    /** Whether it is allowed to view details. */
    shouldAllowViewDetails: PropTypes.bool,

    /** Callback invoked when View Details is pressed */
    onViewDetailsPressed: PropTypes.func,

    ...withLocalizePropTypes,
};

const defaultProps = {
    shouldAllowViewDetails: false,
    onViewDetailsPressed: () => {},
};

const IOUQuote = (props) => {
    const renderIOUMessage = fragment => (
        <Text>
            <Text style={props.shouldAllowViewDetails && styles.chatItemMessageLink}>
                {/* Get first word of IOU message */}
                {Str.htmlDecode(fragment.text.split(' ')[0])}
            </Text>
            <Text style={[styles.chatItemMessage, styles.cursorPointer]}>
                {/* Get remainder of IOU message */}
                {IOUUtils.formatIOUMessageCurrencySymbol(
                    Str.htmlDecode(fragment.text),
                    lodashGet(props.action, 'originalMessage.type'),
                    props.preferredLocale
                ).substring(fragment.text.indexOf(' '))}
        
            </Text>
        </Text>
    );

    return (
        <View style={[styles.chatItemMessage]}>
            {_.map(props.action.message, (fragment, index) => (
                <Pressable
                    key={`iouQuote-${props.action.reportActionID}-${index}`}
                    onPress={props.shouldAllowViewDetails
                        ? props.onViewDetailsPressed
                        : () => {}}
                    style={[styles.flexRow, styles.justifyContentBetween,
                        props.shouldAllowViewDetails
                            ? undefined
                            : styles.cursorDefault,
                    ]}
                    focusable={props.shouldAllowViewDetails}
                >
                    {renderIOUMessage(fragment)}
                    <Icon src={Expensicons.ArrowRight} fill={props.shouldAllowViewDetails ? themeColors.icon : themeColors.transparent} />
                </Pressable>
            ))}
        </View>
    );
};

IOUQuote.propTypes = propTypes;
IOUQuote.defaultProps = defaultProps;
IOUQuote.displayName = 'IOUQuote';

export default withLocalize(IOUQuote);
