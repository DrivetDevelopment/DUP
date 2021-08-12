const { SlashCommand } = require('slash-create');

module.exports = class ReportCommand extends SlashCommand {
    constructor(creator) {
      super(creator, {
        name: 'status',
        description: 'Do you feel like DUP is having issues? I can send my statuspage url!',
      });
    }

    async run(ctx) {
      await ctx.defer(true)
      return 'Heya! Check my statuspage at: <https://ghostslayeri.statuspage.io>!'
    }
}