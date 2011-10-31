require 'mulberry/assets/base'

module Mulberry
  module Asset
    class Image < Mulberry::Asset::Base
      def asset_type_dir
        'images'
      end

      def asset_type
        'image'
      end

      def item
        item_data = base_item.merge(
          {
            :streamed   =>  @url ? true : false
          })

        [ :featured, :featuredSmall, :gallery, :original ].each do |image_type|
          override = "#{@asset_name}-#{image_type}.#{@filename.split('.').last}"
          item_data[image_type] = {
            :filename => File.exists?(File.join(@dir, override)) ? override : @filename
          }
          item_data[image_type][:url] = @url if @url
        end

        item_data
      end
    end
  end
end
