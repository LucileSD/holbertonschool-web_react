import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const styleItem = this.props.type === 'default' ? styles.priorityDefault : styles.priorityUrgent;
    if (this.props.html) {
      return <li
        onClick={() => this.props.markAsRead(this.props.id)}
        data-priority={this.props.type} dangerouslySetInnerHTML={this.props.html}
        className={css(styleItem)}>
      </li>
    } else {
      return <li
        onClick={() => this.props.markAsRead(this.props.id)}
        data-priority={this.props.type} className={css(styleItem)}>
        {this.props.value}
      </li>
    }
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

const styles = StyleSheet.create({
  priorityUrgent: {
    color: 'red',
  },

  priorityDefault: {
    color: 'blue',
  },
});

export default NotificationItem;
