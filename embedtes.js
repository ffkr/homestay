

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
        
        
