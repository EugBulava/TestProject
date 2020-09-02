import React from 'react'
import {Link as ReactRouterLink, useLocation } from "react-router-dom";
import Link from '@material-ui/core/Link';


export const Navigation = () => {

  const location = useLocation();

  return location.pathname !== '/auth' ? (
    <nav>
      <ul>
        <li>
          <ReactRouterLink to="/page_1"><Link component="button" variant="body2">Page 1</Link></ReactRouterLink>
        </li>
        <li>
          <ReactRouterLink to="/page_2"><Link component="button" variant="body2">Page 2</Link></ReactRouterLink>
        </li>
        <li>
          <ReactRouterLink to="/page_3"><Link component="button" variant="body2">Page 3</Link></ReactRouterLink>
        </li>
      </ul>
    </nav>
  ) : null
}
