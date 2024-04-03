import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("test")
  .setDescription("Runs a test");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Works");
}