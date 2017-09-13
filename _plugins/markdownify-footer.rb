module Jekyll

	# Overrides the markdownify filter to append a footer to each markdownification.
	# Footer file is either _includes/footer.md or the _includes/{config.md_footer}
	# Used for global reference links, e.g. [Jekyll] always being made into a link to the Jekyll homepage
	# Disclaimer: I do not know Ruby
	module MarkdownifyFooter
		def markdownify(input)
			site = @context.registers[:site]
			footerFile = "_includes/footer.md"
			customFile = site.config["md_footer"]

			if customFile != nil
				footerFile = "_includes/" + site.config["md_footer"]
			end

			if File.file?(footerFile)
				footer = "\n\n" + File.read(footerFile)
			elsif customFile != nil
				raise Exception, "Missing md_footer file: " + customFile
			else
				footer = ""
			end

			converter = site.find_converter_instance(Jekyll::Converters::Markdown)
			converter.convert(input.to_s + footer)
		end
	end
end

Liquid::Template.register_filter(Jekyll::MarkdownifyFooter)