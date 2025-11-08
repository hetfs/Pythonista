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
    component: ComponentCreator('/docs', 'c40'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '39d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '42a'),
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
                path: '/docs/interactive-REPL/09-loops-iteration-REPL',
                component: ComponentCreator('/docs/interactive-REPL/09-loops-iteration-REPL', 'f7f'),
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
                path: '/docs/interactive-REPL/11-numbers-REPL',
                component: ComponentCreator('/docs/interactive-REPL/11-numbers-REPL', 'ad0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/12-math-module-REPL',
                component: ComponentCreator('/docs/interactive-REPL/12-math-module-REPL', 'c8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/13-ascii-REPL',
                component: ComponentCreator('/docs/interactive-REPL/13-ascii-REPL', 'b89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/14-strings-REPL',
                component: ComponentCreator('/docs/interactive-REPL/14-strings-REPL', 'c32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/15-strings-functions-REPL',
                component: ComponentCreator('/docs/interactive-REPL/15-strings-functions-REPL', 'c9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/16-lists-REPL',
                component: ComponentCreator('/docs/interactive-REPL/16-lists-REPL', '502'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/17-dictionaries-REPL',
                component: ComponentCreator('/docs/interactive-REPL/17-dictionaries-REPL', '8f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/18-tuples-REPL',
                component: ComponentCreator('/docs/interactive-REPL/18-tuples-REPL', 'f16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/19-sets-REPL',
                component: ComponentCreator('/docs/interactive-REPL/19-sets-REPL', '823'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/20-Booleans-REPL',
                component: ComponentCreator('/docs/interactive-REPL/20-Booleans-REPL', '03c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/interactive-REPL/21-binary-data-types',
                component: ComponentCreator('/docs/interactive-REPL/21-binary-data-types', '27a'),
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
                path: '/docs/TO-DO/',
                component: ComponentCreator('/docs/TO-DO/', '4c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TO-DO/ASGI',
                component: ComponentCreator('/docs/TO-DO/ASGI', '082'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TO-DO/build_package',
                component: ComponentCreator('/docs/TO-DO/build_package', '6ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TO-DO/editorconfig',
                component: ComponentCreator('/docs/TO-DO/editorconfig', '7ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TO-DO/license',
                component: ComponentCreator('/docs/TO-DO/license', '3e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TO-DO/live_dashboard',
                component: ComponentCreator('/docs/TO-DO/live_dashboard', 'be6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TO-DO/markdown-setup',
                component: ComponentCreator('/docs/TO-DO/markdown-setup', 'd9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TO-DO/markdown-tools',
                component: ComponentCreator('/docs/TO-DO/markdown-tools', 'd40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TO-DO/project',
                component: ComponentCreator('/docs/TO-DO/project', '80d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TO-DO/project_confi',
                component: ComponentCreator('/docs/TO-DO/project_confi', '623'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TO-DO/project_layout',
                component: ComponentCreator('/docs/TO-DO/project_layout', '221'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TO-DO/project-requirements',
                component: ComponentCreator('/docs/TO-DO/project-requirements', '284'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TO-DO/project1',
                component: ComponentCreator('/docs/TO-DO/project1', 'c56'),
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
