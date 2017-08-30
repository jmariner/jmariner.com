module Jekyll
  class FontAwesomeTag < Liquid::Tag

    def initialize(tag_name, name, tokens)
      super
      @name = name
    end

    def render(context)
      "<i class=\"fa fa-#{@name}\"></i>"
    end
  end
end

Liquid::Template.register_tag('fa', Jekyll::FontAwesomeTag)