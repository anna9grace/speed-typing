import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Message({className, children, title = '', ...attrs}) {

  const classnames = classNames(
    'row',
    'justify-content-center',
    className,
  );

  return (
    <div className={classnames} {...attrs} style={{minHeight: '100px', paddingTop: '25px', paddingBottom: '25px'}}>
      <div className="col-6 bg-light" style={{display: 'none'}}>
        {children}
      </div>
    </div>
  );
}

Message.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Message;
