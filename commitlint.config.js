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
                'ops',

                // Catch all for development related commits not covered elsewhere
                'dev',

                // Alterations to git configuration
                'git',


                // Scaffolding directories, files etc.
                'scaffold',

                // Development tools
                'tools',

            ],
        ],
    },
};