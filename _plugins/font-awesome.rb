module Jekyll
  class FontAwesomeTag < Liquid::Tag

    def initialize(tag_name, name, tokens)
      super
      @name, @tooltip = name.strip.split(/\s+/, 2)
    end

    def render(context)
      if @tooltip
        "<i class=\"fa fa-#{@name}\" data-toggle=\"tooltip\" title=\"#{@tooltip}\"></i>"
      else
        "<i class=\"fa fa-#{@name}\"></i>"
      end
    end
  end
end

Liquid::Template.register_tag('fa', Jekyll::FontAwesomeTag)