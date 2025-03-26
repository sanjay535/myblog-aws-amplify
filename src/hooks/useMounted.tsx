import React from 'react';

function useMounted(): boolean {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}

export default useMounted;
