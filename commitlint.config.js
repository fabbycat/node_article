export default {
    extends: ['@commitlint/config-conventional'],

    rules: {
        'type-enum': [
            2,
            'always',
            [
                // Standard types from @commitlint/config-conventional

                'build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test',

                // Additions
                // Commits that affect operational aspects like infrastructure(IaC), deployment scripts, CI / CD pipelines, backups, monitoring, or recovery procedures etc. from https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13

                // Defining the architectural layout of the project, including the structure of directories, files, and modules.
                'arch',

                // Changes to the build system or external dependencies
                'ops',

                // Catch all for development related commits not covered elsewhere
                'dev',

                // Alterations to git configuration
                'git',

                // Proof of concent, eg. testing whether ideas work.
                'poc',

                // Scaffolding directories, files etc.
                'scaffold',

                // Development tools
                'tools',

                // Work in progrees, not ready for review or merge
                'wip',

            ],
        ],
    },
};