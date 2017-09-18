module Jekyll
  class ResourceTimestampTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @src = text.strip
    end

    def render(context)
      "#{@src}?t=#{Time.now.to_i}"
    end
  end
end

Liquid::Template.register_tag('ts', Jekyll::ResourceTimestampTag)