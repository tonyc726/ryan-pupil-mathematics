import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

/**
 * React Router v5-compatible wrapper for existing class components.
 * Injects history.push / history.replace and match.params.
 */
export default function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const history = {
      push: (to) => navigate(to),
      replace: (to) => navigate(to, { replace: true }),
    };
    const match = { params };

    return (
      <Component
        {...props}
        history={history}
        location={location}
        match={match}
      />
    );
  }

  const name = Component.displayName || Component.name || 'Component';
  ComponentWithRouterProp.displayName = `withRouter(${name})`;

  return ComponentWithRouterProp;
}
