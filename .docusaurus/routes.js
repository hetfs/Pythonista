import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '9ba'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c8a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'cfb'),
            routes: [
              {
                path: '/docs/category/getting-started-with-python',
                component: ComponentCreator('/docs/category/getting-started-with-python', '07c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/read-eval-print-loop',
                component: ComponentCreator('/docs/category/read-eval-print-loop', 'd7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/structuring-your-project-',
                component: ComponentCreator('/docs/category/structuring-your-project-', 'd7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/01-intro-REPL',
                component: ComponentCreator('/docs/interactive-REPL/01-intro-REPL', 'c58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/02-troubleshooting-REPL',
                component: ComponentCreator('/docs/interactive-REPL/02-troubleshooting-REPL', '74c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/03-variables-REPL',
                component: ComponentCreator('/docs/interactive-REPL/03-variables-REPL', 'f08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/04-assignment-operators-REPL',
                component: ComponentCreator('/docs/interactive-REPL/04-assignment-operators-REPL', '6fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/05-expressions-REPL',
                component: ComponentCreator('/docs/interactive-REPL/05-expressions-REPL', '1ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/06-operator-precedence-REPL',
                component: ComponentCreator('/docs/interactive-REPL/06-operator-precedence-REPL', '54f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/07-data-types-REPL',
                component: ComponentCreator('/docs/interactive-REPL/07-data-types-REPL', '5cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/08-conditional-logic-REPL',
                component: ComponentCreator('/docs/interactive-REPL/08-conditional-logic-REPL', 'b80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/08-math-module',
                component: ComponentCreator('/docs/interactive-REPL/08-math-module', 'b07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/09-binary-data-types',
                component: ComponentCreator('/docs/interactive-REPL/09-binary-data-types', '243'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/09-booleans',
                component: ComponentCreator('/docs/interactive-REPL/09-booleans', '1e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/09-loops-iteration-REPL',
                component: ComponentCreator('/docs/interactive-REPL/09-loops-iteration-REPL', 'f7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/10-lists',
                component: ComponentCreator('/docs/interactive-REPL/10-lists', '7e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/10-loop-patterns',
                component: ComponentCreator('/docs/interactive-REPL/10-loop-patterns', '067'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/11-python-numbers',
                component: ComponentCreator('/docs/interactive-REPL/11-python-numbers', 'c32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/11-tuples',
                component: ComponentCreator('/docs/interactive-REPL/11-tuples', 'd99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/12-sets',
                component: ComponentCreator('/docs/interactive-REPL/12-sets', '495'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/12-strings-REPL',
                component: ComponentCreator('/docs/interactive-REPL/12-strings-REPL', 'f20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/13-dictionaries-REPL',
                component: ComponentCreator('/docs/interactive-REPL/13-dictionaries-REPL', 'ebf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/13-strings-functions-REPL',
                component: ComponentCreator('/docs/interactive-REPL/13-strings-functions-REPL', '7cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/ASCII',
                component: ComponentCreator('/docs/interactive-REPL/ASCII', '7bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/01-what-is-programming',
                component: ComponentCreator('/docs/introduction/01-what-is-programming', 'ae1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/02-introduction-python',
                component: ComponentCreator('/docs/introduction/02-introduction-python', 'a94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/03-howt-to-run-python',
                component: ComponentCreator('/docs/introduction/03-howt-to-run-python', '9f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/04-command-line-options',
                component: ComponentCreator('/docs/introduction/04-command-line-options', 'e18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/04-python-formal',
                component: ComponentCreator('/docs/introduction/04-python-formal', '3e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/05-naming-conventions',
                component: ComponentCreator('/docs/introduction/05-naming-conventions', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects-setup/01-essential-steps-overview',
                component: ComponentCreator('/docs/projects-setup/01-essential-steps-overview', 'b06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects-setup/02-python-project-layout',
                component: ComponentCreator('/docs/projects-setup/02-python-project-layout', 'a71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects-setup/python-project-docusaurus',
                component: ComponentCreator('/docs/projects-setup/python-project-docusaurus', '5c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/python-specialization',
                component: ComponentCreator('/docs/python-specialization', '903'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/what-is-new',
                component: ComponentCreator('/docs/what-is-new', 'f61'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
