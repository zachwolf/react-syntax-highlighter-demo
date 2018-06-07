import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import diff from 'react-syntax-highlighter/languages/prism/diff'
import github from 'react-syntax-highlighter/styles/prism/ghcolors'

registerLanguage('diff', diff)

export function CodeBlock ({ classes }) {
  const lineProps = () => ({
    className: classes.line,
  })

  return (
    <Fragment>
      <span className={classes.line}>~ code ~</span>
      <SyntaxHighlighter
        language="diff"
        style={{
          ...github,
          [classes.line]: {
            background: 'green', // works
          }
        }}
        wrapLines
        lineProps={lineProps}
      >
{`-import { withStyles } from 'material-ui/styles'
+import { withStyles } from '@material-ui/core/styles'`}
      </SyntaxHighlighter>
    </Fragment>
  )
}

export default withStyles({
  line: {
    '&:before': { // doesn't work
      content: '"$"',
    },
  },
})(CodeBlock)