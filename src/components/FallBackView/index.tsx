import React from 'react';

function FallBackView(props: {
  error?: unknown;
  isLoading?: boolean;
  isFetchFailed?: boolean;
}) {
  if (props.error) { console.error(props.error) }

  if (props.isLoading) { return <div>Loading...</div> }
  
  if (props.isFetchFailed) { return <div>{'Fetching Failed!'}</div> }

  return <div>Loading...</div>
}

export default FallBackView;
