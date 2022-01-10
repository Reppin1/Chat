import Scrollbars from 'react-custom-scrollbars';
import React from 'react';

const Scrollbar = ({children, messages}) => {
  const messageRef = React.useRef(null);

  React.useEffect(() => {
    if (messages.length >= 1) {
      messageRef.current.scrollToBottom();
    }
  }, [messages]);

  return (
    <Scrollbars
      ref={messageRef}
      renderView={(({style, ...props}) => {
        const viewStyle = {
          overflowX: 'hidden',
        };
        return (
          <div style={{...style, ...viewStyle}} {...props} />
        );
      })}
      renderThumbVertical={({style, ...props}) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: '#3B3B3B',
            paddingLeft: '4px',
            borderRadius: '14px',
          }}
        />
      )}
      autoHide={false}
    >
      {children}
    </Scrollbars>
  );
};

export { Scrollbar };
