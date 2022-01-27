// versi 13
const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

channel.send({ embeds: [exampleEmbed] });



// versi 12

client.on('message', async (message) => {

        if (message.content.toLowerCase() === '?help') {
          const embed = new Discord.MessageEmbed()
            .setTitle('This is a test Embed.')
            .setURL('https://example.com')
            .setAuthor('example')
            .setDescription('This is a test Description which we will see.')
            .setColor('#FF2D00')
            .setThumbnail('https://example.png')
            .setImage('https://example.png')
            .setFooter('This is a example footer', 'https://example.png')
            .addFields({
              name: 'Test Number 1',
              value: 'This is a example value',
              inline: true
            }, {
              name: 'Test Number 2',
              value: 'This is a example value',
              inline: true
            }, {
              name: 'Test Number 3',
              value: 'This is a example value'
            }, {
              name: 'Test Number 4',
              value: 'This is a example value'
            })
            .setTimestamp();

          message.channel.send(embed);
        }
